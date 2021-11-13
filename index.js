const driver = require('bigchaindb-driver')

const alice = new driver.Ed25519Keypair()
const conn = new driver.Connection('https://test.ipdb.io/api/v1/')
const tx = driver.Transaction.makeCreateTransaction(
    { message: 'Blockchain all the things!' },
    null,
    [ driver.Transaction.makeOutput(
        driver.Transaction.makeEd25519Condition(alice.publicKey))],
    alice.publicKey)
const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
conn.postTransactionCommit(txSigned)