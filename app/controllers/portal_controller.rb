# frozen_string_literal: true

class PortalController < ApplicationController
  layout "portal"

  def index
    @portal_props = { name: "Stranger" }
  end
end
