## Steps on the manual installation of the Tech Stack

## py $ pip

### Win (x64)
- Download Python (latest version) Installer from [here](https://www.python.org/downloads/)
- Run the Installer from your Downloads folder and  check “Add Python 3.x to PATH”.
- Verify Installation by running `python --version` from your CMD/PowerShell.
- Pip comed pre-installed with the current Py versions (>3.4)

### Linux (Fedora)
- if python isn't installed: (do as below)
- run `sudo dnf install python3`
- run `dnf install python3-pip`
- verify with py --version & pip --version
- You can upgrade pip with `pip install --upgrade pip`

## flask

### Win (x64)
NB: advisable to use a virtual environment to manage the dependencies for a project, both in development and in production.
NB: run on powershell(admin) but  Set-ExecutionPolicy as RemoteSigned then proceed
Py budles the [venv](https://docs.python.org/3/library/venv.html#module-venv) for VEs.
- Run on your project path `py -3 -m venv .venv`
- Activate with `venv\Scripts\activate`


### Linux (Fedora)
_(coming soon)_ python3 -m venv .venv
- Run on your project path `python3 -m venv .venv`
- Activate with ` . .venv/bin/activate` or `source project_venv/bin/activate`
- Your shell prompt will change to show the name of the activated environment as below:


![alt text](/ledgers/documentation/win1.png)
- install flask now with `pip install Flask` or `python -m pip install flask`


### Run app

Python web client 
- `flask run` will run with debug mode off.
- `python app.py` will run with debug mode on