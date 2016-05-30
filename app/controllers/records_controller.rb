class RecordsController < ApplicationController
  def index
    @records = Record.all
  end

  def create
  	@record = Record.new(record_params)

  	if @record.save
  		render json: @record
  	else
  		# Not sure what errors are automatically rendered, and not sure what this status is about
  		render json: @record.errors, status: :unprocessable_entity
  	end
  end

  def update
    @record = Record.find(params[:id])
    if @record.update(record_params)
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @record = Record.find(params[:id])
    @record.destroy
    # not sure what head :no_content does. I can guess that it sends no content in the head of the HTTP request. And none in the body?
    head :no_content
  end

  private

  def record_params
  	params.require(:record).permit(:title, :amount, :date)
  end
end
