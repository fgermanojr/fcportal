class User < ApplicationRecord
  has_many :models, dependent: :destroy
  NAME_REGEX = /\w+/
  validates :username, presence: true, uniqueness: { case_sensitive: false },
                       format: { with: /\A#{NAME_REGEX}\z/i },
                       length: { maximum: 20 }
  validates :password, presence: true, length: { minimum: 6 }
  has_secure_password
  has_many :messages, dependent: :destroy

  scope :verify, ->(user_name) { where(username: user_name) }
end
