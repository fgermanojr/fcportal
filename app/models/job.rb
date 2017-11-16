class Job < ApplicationRecord
  belongs_to :runable, polymorphic: true, optional: true # work-around, see note in submissions_controller.
  enum job_state: {enqueued: 1, started:2 , ended: 3}

  def self.establish(build, job_state, pwp)
    # The job is used to track a unit of work; it belongs to a build or a run

    # @build.run.runable = @build FAILING . trying optional route.
    # XXX @build.run.runable = @build # NOTE. A work-around for a bug in rails 5.x.
    # See jarlorey.com article on Polymorthic associations. Rails recently
    # changed to always require the owner to exist, but somehow internally does
    # not set the owner. You can also, on the children, make
    # belongs_to, ....,  optional: true, however, this violates the spirit of
    # what is going on; the owner is required.
    server_name = ''
    queue_name = ''

    if job_state == 1
      @job = Job.create(build_id: build.id,
                        server_name: server_name, queue_name: queue_name,
                        job_state: job_state, dt_enqueued: Time.now.utc)
    elsif job_state == 2
      byebug
      Job.update(pwp.job_id, dt_started: Time.now.utc)
    elsif job_state == 3
      byebug
      Job.update(@pwp.job_id, dt_completed: Time.now.utc)
    else
      # NEVER
    end
  end
end