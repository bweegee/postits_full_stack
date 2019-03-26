class Api::PostitsController < ApplicationController
  before_action :set_postit, only: [:show, :update, :destroy]

  def index
    render json: Postit.all.order(important: :desc)
  end

  def show
    render json: @postit
  end

  def create
    postit = Postit.create(postit_params)

    if postit.save
      render json: postit
    else
      render json: { errors: app.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @postit.save
      render json: @postit
    else
      render json: { errors: app.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @postit.destroy
  end

  private

  def set_postit
    @postit = Postit.find(params[:id])
  end

  def postit_params
    params.require(:postit).permit(:note, :color, :important)
  end

end
