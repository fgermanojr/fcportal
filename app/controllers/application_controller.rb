class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  def show # why
byebug
  end

    # Confirms a logged-in user.
    def logged_in_user
puts logged_in?
byebug
      unless logged_in?
        # flash[:danger] = "Please log in."
puts 'go to login'
        redirect_to login_url
      end
    end
end
