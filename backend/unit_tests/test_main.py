# import pytest
# from fastapi.testclient import TestClient
# from ..main import app
# from fastapi import status

# client = TestClient(app)

# def test_return_healthcheck():
#     respose = client.get("/")
#     assert respose.status_code == status.HTTP_200_OK
#     assert respose.json() == {"status" : "healthy"}

# def test_equal():
#     assert 3 == 3