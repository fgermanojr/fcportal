class Job < ApplicationRecord
  belongs_to :runable, polymorphic: true, optional: true # work-around, see note in submissions_controller.
  enum job_state: {enqueued: 1, started:2 , ended: 3}
end