class Run < ApplicationRecord
  belongs_to :build
  has_one :job, as: :runable
end