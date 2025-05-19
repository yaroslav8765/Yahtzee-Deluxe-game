# Yahtzee Deluxe Game

## Setting Up the Project

To set up the project on your local machine, follow these steps:

1.  **Download the ZIP archive** of the project.
2.  **Extract the ZIP file** into your desired folder on your computer.
3.  **Open the extracted folder** using your code editor, such as VS Code.
4.  **Create a `.env` file** in the root directory of the project and add the following text to it:

    ```
    SQLALCHEMY_DATABASE_URL = "sqlite:///./testdb.db"
    ```

    You can also specify a different database link if you prefer.

## Back-end Setup

Follow these steps to run the back-end server:

1.  **Open a terminal** in your operating system.
2.  Navigate to the back-end directory using the command:

    ```bash
    cd .\backend\
    ```

4.  Create a virtual environment for the project:

    ```bash
    python -m venv venv
    ```

    If you use linux:
    
    ```bash
    python3 -m venv venv
    ```
    
6.  Go back to the root directory of the project:

    ```bash
    cd ..
    ```

7.  (Windows only) Remove script execution restrictions for the current process:

    ```powershell
    Set-ExecutionPolicy Unrestricted -Scope Process
    ```

8.  Activate the virtual environment:

    ```bash
    backend\venv\Scripts\activate
    ```

     If you use linux:
    
    ```bash
    source backend/venv/bin/activate
    ```

9.  Install the necessary dependencies:

    ```bash
    pip install fastapi uvicorn sqlalchemy pydantic_settings
    ```

10.  Run the Uvicorn server:

    ```bash
    uvicorn backend.main:app --reload
    ```

## Front-end Setup

To run the client-side of the game, perform the following actions in a **new terminal window**:

1.  Navigate to the front-end directory:

    ```bash
    cd .\vue-frontend\
    ```

2.  Install the Node.js dependencies:

    ```bash
    npm i
    ```

3.  Run the Vue.js development server:

    ```bash
    npm run dev
    ```


## Running the Game

After successfully completing all the steps, the project will be set up, and you can open the game in your browser by navigating to [http://localhost:5173/](http://localhost:5173/) and enjoy a little gamble :)






## Achieving a 95% RTP (Return to Player)

The 95% RTP was achieved through a systematic approach involving simulation and rigorous testing:

1.  **Simulation Script:** A dedicated Python script (`./backend/unit_tests/simulation.py`) was created. This script simulates a large number of game rounds. During these simulations, the script dynamically adjusts the game's payout coefficients. The goal of this iterative adjustment was to identify a set of coefficients that would result in an RTP of approximately 95%.

2.  **Coefficient Optimization:** The simulation script continuously monitors the calculated RTP based on the current coefficients. It increases or decreases these coefficients in each simulation run until a configuration is found that yields an RTP close to the target of 95%.

3.  **Unit Test Verification:** Once the simulation process identified suitable coefficients, a comprehensive unit test was implemented. This test sends a significant number of requests (100,000) to the game's API endpoints. After these simulated game plays, the test calculates the actual RTP achieved.

4.  **RTP Validation:** The results of the unit test demonstrated an RTP of `95.00557717831803%`. This figure is remarkably close to the target RTP of 95%, confirming the effectiveness of the simulation and coefficient optimization process.

   ![RTP Test Result](https://github.com/user-attachments/assets/4fa8ba6b-01ba-422e-a8d8-3d2e97a8759f) - Result of the RTP unit test.

**Note:** With the initial standard coefficients of 1, 2, 3, and 4, the simulated RTP was approximately 111%.

