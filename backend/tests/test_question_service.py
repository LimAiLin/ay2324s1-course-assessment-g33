from question_service.main import app
from fastapi.testclient import TestClient

client = TestClient(app)
def test_get_questions():
    response = client.get("/api/v1/question")
    print(response)
    assert response.status_code == 200
    # Add more specific assertions to validate the response data
'''
def test_get_question_by_title():
    response = client.get("/api/v1/question/title/some_title")
    assert response.status_code == 200
    # Add assertions to validate the response data for a specific question title

def test_get_question_problem():
    response = client.get("/api/v1/question/problem/some_title_slug")
    assert response.status_code == 200
    # Add assertions to validate the response data for a specific problem title slug

def test_delete_question():
    response = client.delete("/api/v1/question/title/some_title")
    assert response.status_code == 200
    # Add assertions to validate the response when deleting a question

def test_delete_questions():
    response = client.delete("/api/v1/question")
    assert response.status_code == 200
    # Add assertions to validate the response when deleting all questions

def test_add_questions_from_leetcode():
    response = client.post("/api/v1/question/leetcode")
    assert response.status_code == 200
    # Add assertions to validate the response when adding questions from LeetCode

def test_add_one_question():
    question_data = {
        "title": "Test Question",
        "description": "Test Description",
        # Add more question data fields as needed
    }
    response = client.post("/api/v1/question", json=question_data)
    assert response.status_code == 200
    # Add assertions to validate the response when adding one question

def test_get_question_of_the_day():
    response = client.get("/api/v1/question/day")
    assert response.status_code == 200
    # Add assertions to validate the response for the question of the day

def test_get_submissions_from_question():
    response = client.get("/api/v1/question/history/user_id/title_slug")
    assert response.status_code == 200
    # Add assertions to validate the response for fetching submissions from a question

def test_add_submission_to_db():
    submission_data = {
        "userId": "user_id",
        "titleSlug": "title_slug",
        # Add more submission data fields as needed
    }
    response = client.post("/api/v1/question/history", json=submission_data)
    assert response.status_code == 200
    # Add assertions to validate the response when adding a submission

def test_delete_all_submissions_from_db():
    response = client.delete("/api/v1/question/history")
    assert response.status_code == 200
    # Add assertions to validate the response when deleting all submissions
'''