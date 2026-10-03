from fastapi import FastAPI

app = FastAPI(
    title="Employee Security & Compliance Platform",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {"status": "healthy"}