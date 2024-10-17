RESULTS FROM CMD

TEST result

```shell
[⠊] Compiling...
[⠘] Compiling 25 files with Solc 0.8.27
[⠃] Solc 0.8.27 finished in 728.38ms
Compiler run successful!

Ran 1 test for test/Maxsender.t.sol:MaxsenderTest
[PASS] test_sendToken() (gas: 87331)
Suite result: ok. 1 passed; 0 failed; 0 skipped; finished in 7.99ms (1.65ms CPU time)

Ran 1 test suite in 146.92ms (7.99ms CPU time): 1 tests passed, 0 failed, 0 skipped (1 total tests)
```

CHECKING OUT FOR ACCOUNT ADDRESS

```shell
[⠊] Compiling...
No files changed, compilation skipped
Script ran successfully.
Gas used: 259115

== Logs ==
  Deployer Account address:  0x4E1856E40D53e2893803f1da919F5daB713B215c
```

SIMULATION OF SMART CONTRACT

```shell
[⠊] Compiling...
No files changed, compilation skipped
Script ran successfully.

== Logs ==
  Deployer Account address:  0x4E1856E40D53e2893803f1da919F5daB713B215c

## Setting up 1 EVM.

==========================

Chain 2810

Estimated gas price: 0.15063575 gwei

Estimated total gas used for script: 340061

Estimated amount required: 0.00005122534378075 ETH

==========================

SIMULATION COMPLETE. To broadcast these transactions, add --broadcast and wallet configuration(s) to the previous command. See forge script --help for more.
```

DEPLOYEMNT SUCCESSFUL

```shell
[⠒] Compiling...
No files changed, compilation skipped
Script ran successfully.

== Logs ==
  Deployer Account address:  0x4E1856E40D53e2893803f1da919F5daB713B215c

## Setting up 1 EVM.

==========================

Chain 2810

Estimated gas price: 0.14963575 gwei

Estimated total gas used for script: 340061

Estimated amount required: 0.00005088528278075 ETH

==========================

##### 2810
✅  [Success]Hash: 0x6653cbde9311b4c90ecb78bb5c49acc80f0e4f166b88317bd3740efa941f6b69
Contract Address: 0x279AD96a13998dE7E6511f6F5AB9bD358b1453Ca
Block: 11189068
Paid: 0.0000391521939875 ETH (261650 gas * 0.14963575 gwei)

✅ Sequence #1 on 2810 | Total Paid: 0.0000391521939875 ETH (261650 gas * avg 0.14963575 gwei)


==========================

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.

```
