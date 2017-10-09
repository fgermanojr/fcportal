class SessionsController < ApplicationController

  def new
  end

  def create
byebug
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user.authenticate(params[:session][:password])
byebug
      log_in user
      redirect_to messages_url
    else
byebug
      flash.now[:danger] = 'Invalid username/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to login_url
  end
end