class Job < ApplicationRecord
  belongs_to :runable, polymorphic: true
  enum job_state: {enqueued: 1, started:2 , ended: 3}
end