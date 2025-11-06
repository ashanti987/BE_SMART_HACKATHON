from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello BE Smart Hackathon!"}

@app.get("/status")
def get_status():
    return {"status": "Backend is running"}
