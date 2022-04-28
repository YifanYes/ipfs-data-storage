# React DApp with IPFS

This is a React Dapp connected to IPFS for decentralized data storage.

IPFS, stands for InterPlanetary File System, it is a communication protocol that use peer-to-peer networking to store, retrieve, and share data through a distributed file system mechanism.

The IPFS network runs on the web and uses content-addressed storage (CAS) to store data and retrieve it based on its content, not its location. IPFS uses this method to uniquely identify and fetch the data in question.

Using IPFS to store archival data enables deduplication, clustered persistence, and high performance on the posterity of the data.

# How does IPFS work ?

When you upload data to an existing node on the protocol, the data is chopped into smaller chunks of itself, then hashed and given a unique content identifier (CID), which serves as fingerprint. This makes it faster and easier to store the small pieces of your data on the network quickly.

Once the data is uploaded, other nodes update to contain a cached copy of the data. This way, they can also privde the data just like the initial node. It's up to a node to keep and still provide this data or discard it, for example, as a way to save memory.

For every new upload of new data or previous uploaded data, a new cryptographic hash (CID) is generated, making every upload to the network unique and resistant to security braches or tampering.

IPFS uses a decentralized naming system to find the name of the file - that's the long CID string - then maps the CID to a more human-readable DNS name using DNSLink.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
