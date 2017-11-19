class Run < ApplicationRecord
  belongs_to :build, foreign_key: "build_id"
  has_one :job, as: :runable
end