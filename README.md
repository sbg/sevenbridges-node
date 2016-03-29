# sbg-node-client
Seven Bridges NodeJS Client implementation

# Develpoment setup: 

    npm install -g gulp-cli tsd 
    
    # in root directory run
    npm install
    tsd install
    
    
    
create  file in `~/.sbg/configuration.json`


with content

    {
        "auth_token" : "xxxxxxx"
    }
    


### Running tests:

    gulp test
    
Running specifig client tests:
    
    gulp test --test user # will run only tests/user-client-test.js
    

