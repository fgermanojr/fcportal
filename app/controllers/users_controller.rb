class UsersController < ApplicationController

  def new
    @user = User.new
    # we want the login form to come up.
  end

  def create
    puts params.inspect
    puts user_params.inspect
# TBD put some validation in front end

    @user = User.new(user_params)
    if @user.save
      log_in @user
      # redirect_to messages_url  on OK (user created), open portal

      render json: {result: 'authenticated'}.to_json # user created and authenticated
    else
      #r ender 'new'  Go to user new of bad (user create failed), go to user create

      render json: {result: 'usernotcreated'}.to_json
    end
  end

  # add remove user later

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation,
                                 :email)
  end
end