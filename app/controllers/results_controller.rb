class ResultsController < ApplicationController
  def show
    # :model, :runid coming in
    render template: "results/#{params[:model]}/110520E/console/index"
  end
end