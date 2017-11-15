class Build < ApplicationRecord
  belongs_to :model
  has_many :jobs, as: :runable
end