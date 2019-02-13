class ToolsController < ApplicationController
  before_action :populate_tool_data

  def create
  end

  def index
  end

  def populate_tool_data
    @tool_data = {
      api_create_path: api_v1_tool_api_create_path,
      index_path: tool_index_path
    }
  end
end
