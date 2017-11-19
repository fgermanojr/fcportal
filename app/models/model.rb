class Model < ApplicationRecord
  belongs_to :user, foreign_key: "user_id"
  has_many :builds, dependent: :destroy

  def self.verify(user, pwp)
    # verify model exists, else create it.
    @model = Model.where(username: pwp[:userName], modelname: pwp[:modelName]).first # TBD need to add index
    unless @model
      @model = Model.create!(user_id: user.id,
                             username: user.username,
                             modelname: pwp[:modelName],
                             description: '')
      @model.save!
    end

    @model
  end
end