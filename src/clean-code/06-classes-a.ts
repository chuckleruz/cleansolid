(()=>{

    //not appling the principle of single responsability

    type Gender = 'M'|'F'
    class Person {
    
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){}
    }

    class User extends Person {
        
        public lastAccess: Date

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate)
            this.lastAccess = new Date()
        }

        checkCredentials(){
            return true
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate)

        }
    }

    const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'chuck@gmail.com',
        'Admin',
        'Chuck',
        'M',
        new Date('1990-02-20')

    )

    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()})
})();