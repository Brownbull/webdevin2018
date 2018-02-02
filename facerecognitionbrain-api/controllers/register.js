const handleRegister = (req, res, db, bcrypt) => {
    const { email, name, password } = req.body;
    if (!email || !name || !password ){
       return res.status(400).json('incorrect form submission')
    }
    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
            .into('local.login')
            .returning('email')
            .then(loginEmail => {
                return trx('local.users')
                    .returning('*')
                    .insert({
                        email: loginEmail[0],
                        name: name,
                        joined: new Date()
                    })
                    .then(user => {
                        res.json(user[0]);
                    }) // eof return db
            }) // eof trx.insert
            .then(trx.commit)
            .catch(trx.rollback)
    }) // eof db.transaction
    .catch(err => res.status(400).json(err.detail))
}

module.exports = {
    handleRegister: handleRegister
};