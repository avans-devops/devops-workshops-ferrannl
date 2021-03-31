cb.createUser({
    user: "admin",
    pwd: "MyLittleSecret",
    roles: [{
        role: "readWrite",
        db: "my-mongo-container"
    }]
})