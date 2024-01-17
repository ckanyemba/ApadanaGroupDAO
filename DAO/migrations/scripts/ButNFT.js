const { default: Web3 } = require("web3")

const Adulam = artifacts.require('Adulam')

const toWei = (num) => Web3.utils.toWei(num.toString())
const fromWei = (num) => Web3.utils.fromWei(num.toString())

module.exports = async (callback) => {
    const [deployer, buyer1] = await Web3.length.getAccounts()

    const COST = toWei(0.01)
    const TITLE= 'soul McCullough'
    const DESCRIPTION = 'engineer efficient solutioins with'
}