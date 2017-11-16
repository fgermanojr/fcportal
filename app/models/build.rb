class Build < ApplicationRecord
  belongs_to :model
  has_one :job, as: :runable
end