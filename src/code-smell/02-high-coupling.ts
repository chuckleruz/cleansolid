(()=>{
   //not appling the principle of single responsability
    type Gender = 'M'|'F';

    // high acloped
 
    class Person {
        constructor(
            public firstName: string,
            public lastName: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            firstname: string,
            lastName: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(firstname, lastName, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastFolderOpen: string,
        email     : string,
        role      : string,
        firstName : string,
        lastName  : string,
        gender    : Gender,
        birthdate : Date,
    ){
        super(
            email,
            role,
            new Date(),
            firstName,
            lastName,
            gender,
            birthdate
        )
    }
}
    


    const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'chuck@gmail.com',
        'Admin',
        'Chuck',
        'Levien',
        'M',
        new Date('1990-02-20')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()