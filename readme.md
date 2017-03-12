# :microscope: | Acceptance & Tests

This example app follows closely the [Meteor Chef] article, "[Acceptance Testing
Basics with Chimp]" -- For more info, read that. It's really well written.

There are a few _big wins_ for writing our tests with Gherkin® syntax and Chimp.js.

- Semantically, they are standard english phrases. Thus the logic is portable.
- With Chimp we have access to a `server.execute()` method which lets us call
on server-side commands from the client.
- Tests can be run in a variety of browsers.
- There is a fairly deliberate path for [CI].

***

### Installing Chimp

Globally, via NPM or Yarn seems to be the preferred method.

- `yarn global add chimp`

I do wonder if there may be a Node version problem in the future, since this
will install Chimp to whatever the current Node's (for me, 7.6) global
`node_modules` folder. We'll see. The only issues spat out from installing
seemed pretty innocuous.

```
➜  meteor-cucumber-example git:(master) ✗ yarn global add chimp
yarn global v0.21.3
warning No license field
[1/4] 🔍  Resolving packages...
warning chimp > phantomjs-prebuilt > request > node-uuid@1.4.7: use uuid module instead
warning chimp > xolvio-ddp > request > node-uuid@1.4.7: use uuid module instead
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "chai-as-promised@6.0.0" has unmet peer dependency "chai@>= 2.1.2 < 4".
```

Just the usual Peer Dependency stuff. It's unfortunate that this is "this usual",
but so it goes!

This project is about _acceptance_, after all.


[Meteor Chef]: https://themeteorchef.com
[Acceptance Testing Basics with Chimp]: https://themeteorchef.com/tutorials/acceptance-testing-basics-with-chimp
[CI]: https://medium.com/@kimeshan/continuous-integration-with-meteor-chimp-galaxy-and-circleci-5ee809ca6116#.oza9isaah