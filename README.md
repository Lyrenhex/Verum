# Verum

[![Join the chat at https://gitter.im/freechat-project/Verum](https://badges.gitter.im/freechat-project/Verum.svg)](https://gitter.im/freechat-project/Verum?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Federated, volatile chat function (for the super secure).

**Notice: Verum is _very_ early in development, and thus this ReadMe is under development (along with Verum and its Server counterpart).**

## Tell your secrets.
_They aren't going to spread._

Verum is a secure chat service. Of course, many chat services claim to be secure, but are they really? Well, yes, to a degree, but Verum takes things to **a whole new level**.

Verum is for the super secure. We don't make that claim lightly: it uses full end-to-end encryption from the sender to the recipient - assuming that the Node you're chatting over isn't compromised (switching is easy), and no messages are stored after transit.

## So how does it work?

Verum operates on a Node-Based federated & decentralised architecture: anyone can set up a Node, at any time, and the system will support it. Nodes operate as the messenger between you and your buddies: they relay the recipient's public key (of which you may verify the signature of, don't worry!) to you, and they handle the sending of your encrypted message to the recipient. Quite simply, you speak to people on a _user_@_node_ ID system, to which your client will then query _node_ for _user_, grab their details, and send the encrypted message.

At this point, the Node takes over - for a time. The message is added to persistent data store (in JSON), encrypted (as the Node, if all went well, will not be able to decrypt it), bound to the recipient's ID. When the Recipient's client pings the Node, requesting any new messages, all the encrypted messages bound to their ID will be sent to them, decrypted by the recipient. All compliant Nodes are then instructed to remove the data from the persistent JSON data store, meaning only the recipient (and the sender, if they saved the message) have copies of the message.

An additional feature of Verum is that messages are only saved if you **explicitly** request them to be (and encrypted at rest). If you don't, the messages will only be placed in Volatile Memory, meaning that they will be irrevocably lost if you close the application. This behaviour can, of course, be toggled off, but is recommended for _true secrets_ (Edward Snowden, we're looking at you).
