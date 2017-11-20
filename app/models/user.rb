class User < ApplicationRecord
  has_many :models, dependent: :destroy
  NAME_REGEX = /\w+/
  validates :username, presence: true, uniqueness: { case_sensitive: false },
                       format: { with: /\A#{NAME_REGEX}\z/i },
                       length: { maximum: 20 } # Should it mb more? maybe 50,
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true, length: { minimum: 6 }

  has_secure_password 
  has_many :messages, dependent: :destroy # these are chat posts

  scope :verify, ->(user_name) { where(username: user_name).first }
end
