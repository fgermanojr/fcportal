class Run < ApplicationRecord
  belongs_to :build
  has_many :jobs, as: :runable
end