class ResultsController < ApplicationController
  def show
    # maybe user model build id runid
    render template: "results/#{params[:model]}/110520E/console/index"
  end
end