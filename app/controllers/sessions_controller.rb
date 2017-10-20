class SessionsController < ApplicationController

  def new

          @result='a'
          render json: @user


  end

  def create
    @user = User.find_by(username: params[:session][:username].downcase)
# puts params.inspect
# puts session_params.inspect

# puts params[:session].inspect
# puts  params[:session][:username]
# puts params[:session][:password]
# puts @user.authenticate(params[:session][:password])

    if @user && @user.authenticate(params[:session][:password])
      log_in @user
      # redirect_to messages_url
      # rtn logged-in. open up portal.
      render json: {result: 'authenticated'}.to_json
      # respond_to do |format|
      #   format.json { render text: "{result: 'authenticated'" }
      # end
    else
      # redirect to login screen so user can attempt login again
      # from that screen he can hit create user
      render json: {result: 'notauthenticated'}.to_json
    end
  end

  def destroy
    log_out
    # redirect_to login_url
    render json: {result: 'loggedout'}.to_json
  end

  def session_params
    params.require(:session).permit(:username, :password)
  end
end