require 'test_helper'

class ToolsApiControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tools_api_create_url
    assert_response :success
  end

end
