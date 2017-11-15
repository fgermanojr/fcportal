class Model < ApplicationRecord
  belongs_to :user
  has_many :builds, dependent: :destroy
end