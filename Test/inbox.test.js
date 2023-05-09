const assert = require('assert');
const ganache = require("ganache-cli");
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());
const {interface, bytecode} = require("../compile");

let accounts;
let inbox;

beforeEach( async () => {
   //get a list of all the accounts
   accounts = await web3.eth.getAccounts();
   
   inbox = await new Web3.eth.Contract(interface)
   .deploy({ data : bytecode, 
    arguments : ['Hi There'],
    })
   .send({from : accounts[0], gas: '100000'});
});


describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});