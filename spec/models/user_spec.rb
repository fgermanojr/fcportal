require 'rails_helper'

RSpec.describe User, type: :model do
  it "it is valid with valid attributes" do
    expect(User.new(username: 'frankgermano',
                    password: 'along6',
                    password_confirmation: 'along6')).to be_valid
  end

  it "is not valid without a username" do
    expect(User.new(password: 'along6', password_confirmation: 'along6')).not_to be_valid
  end

  it "is not valid without a password" do
    expect(User.new(username: 'frankgermano', password_confirmation: 'along6')).not_to be_valid
  end

  it "is not valid without a password_confirmation" do
    expect(User.new(username: 'frankgermano', password: 'along6')).not_to be_valid
  end

  it "is not valid with name > 20 characters" do
    expect(User.new(username: 'longer that 20 characters will fail', password: 'along6')).not_to be_valid
  end
  it "is not valid with a password less than 6 characters" do
    expect(User.new(username: 'frankgermano', password: 'short')).not_to be_valid
  end

  it "is valid with optional attributes" do
    expect(User.new(username: 'frankgermano',
                    password: 'along6', password_confirmation: 'along6',
                    email: 'support@fortrancalculus.com',
                    is_admin: true)).to be_valid
  end
end