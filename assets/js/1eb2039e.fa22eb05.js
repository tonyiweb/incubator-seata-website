"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[43176],{25140:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=a(74848),t=a(28453);const r={title:"Release Guide",keywords:["Seata"],description:"Release Guide."},i="Release Guide",o={id:"developers/ppmc-guide/release-guide_dev",title:"Release Guide",description:"Release Guide.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/ppmc-guide/release-guide_dev.md",sourceDirName:"developers/ppmc-guide",slug:"/developers/ppmc-guide/release-guide_dev",permalink:"/docs/next/developers/ppmc-guide/release-guide_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/developers/ppmc-guide/release-guide_dev.md",tags:[],version:"current",frontMatter:{title:"Release Guide",keywords:["Seata"],description:"Release Guide."},sidebar:"developers",previous:{title:"Website Guide",permalink:"/docs/next/developers/committer-guide/website-guide_dev"}},c={},h=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Apache Version Release Documentation",id:"11-apache-version-release-documentation",level:4},{value:"1.2 PGP Signature",id:"12-pgp-signature",level:4},{value:"1.3 POM Configuration",id:"13-pom-configuration",level:4},{value:"1.5 Release Notes",id:"15-release-notes",level:4},{value:"2. Release Process",id:"2-release-process",level:2},{value:"1. Prepare Branch",id:"1-prepare-branch",level:3},{value:"2. Pre-release Binary Package",id:"2-pre-release-binary-package",level:3},{value:"2.1 SDK Preparation for Release",id:"21-sdk-preparation-for-release",level:4},{value:"2.2 Submit Source &amp; Binary to SVN Repository",id:"22-submit-source--binary-to-svn-repository",level:4},{value:"2.2.1 Install SVN",id:"221-install-svn",level:5},{value:"2.2.2 Compile seata-server and seata-namingserver",id:"222-compile-seata-server-and-seata-namingserver",level:5},{value:"2.2.3 Sign the Source and Binary",id:"223-sign-the-source-and-binary",level:5},{value:"2.2.4 Check Out SVN Locally, Create Release Version Path, and Move Signature Files, Source, and Binary into It",id:"224-check-out-svn-locally-create-release-version-path-and-move-signature-files-source-and-binary-into-it",level:5},{value:"2.3 Creating Tag and Release Note",id:"23-creating-tag-and-release-note",level:4},{value:"2.3.1 Creating a Tag",id:"231-creating-a-tag",level:5},{value:"2.3.2 Creating a Release Note",id:"232-creating-a-release-note",level:5},{value:"3.1 Internal Community Voting",id:"31-internal-community-voting",level:2},{value:"3.1.2 Completing the Vote",id:"312-completing-the-vote",level:3},{value:"3.2 Voting in the Incubator",id:"32-voting-in-the-incubator",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"release-guide",children:"Release Guide"}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsx)(n.h4,{id:"11-apache-version-release-documentation",children:"1.1 Apache Version Release Documentation"}),"\n",(0,s.jsx)(n.p,{children:"Refer to the following link to understand the ASF release process:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://www.apache.org/dev/release-publishing",children:"Apache Release Guide"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://www.apache.org/dev/release.html",children:"Apache Release Policy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://www.apache.org/dev/publishing-maven-artifacts.html",children:"Maven Release Info"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"12-pgp-signature",children:"1.2 PGP Signature"}),"\n",(0,s.jsx)(n.p,{children:"Follow the Apache release guidelines to sign the release version, allowing users to verify whether the downloaded version has been tampered with."}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"pgp"})," key for version signing, using ",(0,s.jsx)(n.strong,{children:"<your Apache ID>@apache.org"})," as the key USER-ID."]}),"\n",(0,s.jsxs)(n.p,{children:["For more details, refer to the ",(0,s.jsx)(n.a,{href:"https://infra.apache.org/release-signing",children:"Apache Releases Signing documentation"})," and ",(0,s.jsx)(n.a,{href:"http://www.apache.org/dev/openpgp.html",children:"Cryptography with OpenPGP"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is a brief process for generating the key:",(0,s.jsx)(n.a,{href:"http://www.apache.org/dev/openpgp.html",children:"http://www.apache.org/dev/openpgp.html"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"Here is a brief process for generating the key:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Generate a new ",(0,s.jsx)(n.code,{children:"gpg"})," key using ",(0,s.jsx)(n.code,{children:"gpg --full-gen-key"}),", setting the key length to 4096."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: You can set the key to never expire or choose a specific expiration time based on your needs. However, you will need to update the public key after it expires in the ",(0,s.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/seata/KEYS",children:"DEV KEYS file"})," and the ",(0,s.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/seata/KEYS",children:"RELEASE KEYS file"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Upload the key to a public key server using ",(0,s.jsx)(n.code,{children:"gpg --keyserver keys.openpgp.org --send-key <your key id>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: If the access fails, you can upload the public key online via the ",(0,s.jsx)(n.a,{href:"https://keyserver.ubuntu.com/",children:"OpenPGP Keyserver (ubuntu.com)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"You can find the key ID using the command: gpg --list-signatures --keyid-format LONG\npub   rsa4096/561507DBDD81E3D5 2024-09-19 [SC] [expires: 2027-09-19]\n      F2D3A28A392129B927C7FB42561507DBDD81E3D5\nuid                   [ultimate] jianbin.chen <jianbin@apache.org>\nsig 3        561507DBDD81E3D5 2024-09-19  [self-signed]\nsub   rsa4096/07B6250EB8C9B2A0 2024-09-19 [E] [expires: 2027-09-19]\nsig          561507DBDD81E3D5 2024-09-19  [self-signed]\nThe key ID is 561507DBDD81E3D5.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Export the public key to a text file using the command: ",(0,s.jsx)(n.code,{children:"gpg --armor --output ./public-key.txt --export 561507DBDD81E3D5"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Append the generated key to the ",(0,s.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/seata/KEYS",children:"DEV KEYS file"})," and the ",(0,s.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/seata/KEYS",children:"RELEASE KEYS file"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsx)(n.p,{children:"The DEV SVN repository can be added by the Release Manager, while the RELEASE SVN repository requires PMC permissions and can be assisted by the PMC to upload the KEY."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tips:"})," You need to set the default public key. If you have multiple public keys, please modify ",(0,s.jsx)(n.code,{children:"~/.gnupg/gpg.conf"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Reference example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n  (1) RSA and RSA (default)\n  (2) DSA and Elgamal\n  (3) DSA (sign only)\n  (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n        0 = key does not expire\n     <n>  = key expires in n days\n     <n>w = key expires in n weeks\n     <n>m = key expires in n months\n     <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: (Set username) (use Apache ID)\n\nEmail address: (Set email address) (use Apache email)\n\nComment: (Fill in comment)\n\nYou selected this USER-ID:\n\n"Username (comment) <email address>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\n\nYou need a Passphrase to protect your secret key. (Set password)\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"Convert the generated public key and private key to ASCII format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gpg --armor --output ./public-key.txt --export 561507DBDD81E3D5\ngpg --armor --output ./private-key.txt --export-secret-keys 561507DBDD81E3D5\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"View the key list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[root@localhost ~]# gpg --list-signatures --keyid-format LONG\n[keyboxd]\n---------\npub   rsa4096/561507DBDD81E3D5 2024-09-19 [SC] [\u6709\u6548\u81f3\uff1a2027-09-19]\n      F2D3A28A392129B927C7FB42561507DBDD81E3D5\nuid                   [ \u7edd\u5bf9 ] jianbin.chen <jianbin@apache.org>\nsig 3        561507DBDD81E3D5 2024-09-19  [\u81ea\u7b7e\u540d]\nsub   rsa4096/07B6250EB8C9B2A0 2024-09-19 [E] [\u6709\u6548\u81f3\uff1a2027-09-19]\nsig          561507DBDD81E3D5 2024-09-19  [\u81ea\u7b7e\u540d]\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Upload the public key to the key server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[root@localhost gpgtest]# gpg --keyserver keys.openpgp.org --send-key 561507DBDD81E3D5\ngpg: sending key 561507DBDD81E3D5 to hkp server keys.openpgp.org\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"13-pom-configuration",children:"1.3 POM Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Configure the POM file to deploy the version to the ASF Nexus repository."}),"\n",(0,s.jsx)(n.p,{children:"\u2460 Add Apache POM inheritance for default settings."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<parent>\n    <groupId>org.apache</groupId>\n    <artifactId>apache</artifactId>\n    <version>XX</version>\n</parent>\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u2461 Add key information to the Maven configuration file ",(0,s.jsx)(n.code,{children:"settings.xml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<settings>\n    <profiles>\n        <profile>\n            <id>signed_release</id>\n            <properties>\n                <mavenExecutorId>forked-path</mavenExecutorId>\n                <gpg.keyname>yourKeyName</gpg.keyname>\n          <deploy.url>https://dist.apache.org/repos/dist/dev/incubator/seata/</deploy.url>\n            </properties>\n        </profile>\n    </profiles>\n    <servers>\n        \x3c!-- To publish a snapshot of some part of Maven --\x3e\n        <server>\n            <id>apache.snapshots.https</id>\n            <username>yourApacheID</username>\n            \x3c!-- Use the password encryption by maven --\x3e\n            <password>yourApachePassword</password>\n        </server>\n        \x3c!-- To stage a release of some part of Maven --\x3e\n        <server>\n            <id>apache.releases.https</id>\n            <username>yourApacheID</username>\n            <password>yourApachePassword</password>\n        </server>\n        <server>\n            <id>gpg.passphrase</id>\n            <passphrase>yourKeyPassword</passphrase>\n        </server>\n    </servers>\n</settings>\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tips:"})," It is recommended to use ",(0,s.jsx)(n.a,{href:"http://maven.apache.org/guides/mini/guide-encryption.html",children:"Maven's password encryption capabilities"})," to encrypt ",(0,s.jsx)(n.code,{children:"gpg.passphrase"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"15-release-notes",children:"1.5 Release Notes"}),"\n",(0,s.jsxs)(n.p,{children:["Build the corresponding version's Release Notes from the ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/2.x/changes/zh-cn/2.x.md",children:"changelog"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"2-release-process",children:"2. Release Process"}),"\n",(0,s.jsx)(n.h3,{id:"1-prepare-branch",children:"1. Prepare Branch"}),"\n",(0,s.jsxs)(n.p,{children:["Create a new branch from the main branch as the release branch. For example, if you are going to release version ",(0,s.jsx)(n.code,{children:"${release_version}"}),", create a new branch ",(0,s.jsx)(n.code,{children:"${release_version}"})," from the development branch. All modifications and tagging related to ",(0,s.jsx)(n.code,{children:"${release_version}"})," Release Candidates will be done in the ",(0,s.jsx)(n.code,{children:"${release_version}"})," branch, ensuring that all GitHub Actions CI checks pass. After the release is completed, merge this branch back into the main branch."]}),"\n",(0,s.jsxs)(n.p,{children:["Example: If the Java SDK needs to release version ",(0,s.jsx)(n.code,{children:"2.2.0"}),", create a new branch ",(0,s.jsx)(n.code,{children:"2.2.0"})," from the ",(0,s.jsx)(n.code,{children:"2.x"})," branch, and commit changes in this branch to replace the Snapshot version number with ",(0,s.jsx)(n.code,{children:"2.2.0"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"2-pre-release-binary-package",children:"2. Pre-release Binary Package"}),"\n",(0,s.jsx)(n.h4,{id:"21-sdk-preparation-for-release",children:"2.1 SDK Preparation for Release"}),"\n",(0,s.jsxs)(n.p,{children:["Prepare the release according to the instructions in ",(0,s.jsx)(n.a,{href:"https://infra.apache.org/publishing-maven-artifacts.html",children:"publishing maven artifacts"})," [4]."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mvn clean deploy -Prelease -DskipTests -e -B -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=warn\n"})}),"\n",(0,s.jsxs)(n.p,{children:["At this point, the Seata SDK is published to the ",(0,s.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"staging repository"})," (you need to log in with your Apache account credentials). Find the released version, ",(0,s.jsx)(n.code,{children:"${STAGING.RELEASE}"}),", and click Close."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: If closing fails, it may be because the public key corresponding to the signing key cannot be retrieved from ",(0,s.jsx)(n.a,{href:"http://keys.openpgp.org/",children:"keys.openpgp.org"}),". Please check yourself using the ",(0,s.jsx)(n.a,{href:"https://keyserver.ubuntu.com/",children:"OpenPGP Keyserver (ubuntu.com)"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"22-submit-source--binary-to-svn-repository",children:"2.2 Submit Source & Binary to SVN Repository"}),"\n",(0,s.jsx)(n.h5,{id:"221-install-svn",children:"2.2.1 Install SVN"}),"\n",(0,s.jsxs)(n.p,{children:["Download and install from ",(0,s.jsx)(n.a,{href:"https://subversion.apache.org/download.cgi#recommended-release",children:"Download Apache Subversion Sources"})]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can quickly install it using ",(0,s.jsx)(n.code,{children:"brew install subversion"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"222-compile-seata-server-and-seata-namingserver",children:"2.2.2 Compile seata-server and seata-namingserver"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mvn -Prelease-seata -Dmaven.test.skip=true -Dskip.npm=true -T4C -Dpmd.skip=true clean install -U\n"})}),"\n",(0,s.jsx)(n.h5,{id:"223-sign-the-source-and-binary",children:"2.2.3 Sign the Source and Binary"}),"\n",(0,s.jsxs)(n.p,{children:["For the Source, it is recommended to download the zip package directly from the corresponding version branch on GitHub, such as 2.2.0, to avoid polluting the Source package content in your local environment. Then rename it to ",(0,s.jsx)(n.code,{children:"apache-seata-x.x.x-incubating-src.zip"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Run the following command to generate a SHA-512 checksum:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"shasum -b -a 512 apache-seata-x.x.x-incubating-src.zip >> apache-seata-x.x.x-incubating-src.zip.sha512\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sign the Binary:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gpg --armor --output apache-seata-x.x.x-incubating-bin.zip.asc apache-seata-x.x.x-incubating-bin.zip\n"})}),"\n",(0,s.jsx)(n.p,{children:"For the Binary, generate a SHA-512 checksum:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"shasum -b -a 512 apache-seata-x.x.x-incubating-bin.tar.gz >> apache-seata-x.x.x-incubating-bin.tar.gz.sha512\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sign the Binary:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gpg --armor --output apache-seata-x.x.x-incubating-bin.tar.gz.asc apache-seata-x.x.x-incubating-bin.tar.gz\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify the SHA-512 checksum:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"shasum -c apache-seata-x.x.x-incubating-bin.tar.gz.sha512\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify the signature:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gpg --verify apache-seata-x.x.x-incubating-src.zip.asc apache-seata-x.x.x-incubating-src.zip\n"})}),"\n",(0,s.jsx)(n.h5,{id:"224-check-out-svn-locally-create-release-version-path-and-move-signature-files-source-and-binary-into-it",children:"2.2.4 Check Out SVN Locally, Create Release Version Path, and Move Signature Files, Source, and Binary into It"}),"\n",(0,s.jsx)(n.p,{children:"Check out the SVN directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"svn co --depth=empty https://dist.apache.org/repos/dist/dev/incubator/seata/\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create the release version path and move the files into it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd seata\nmkdir incubator-seata/x.x.x-RCn/\nmv ../x.x.x incubator-seata/x.x.x-RCn/\n"})}),"\n",(0,s.jsx)(n.p,{children:"After executing the above commands, the structure should look approximately like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"-rw-r--r--@ 1 fe-work  staff   180M  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz\n-rw-r--r--@ 1 fe-work  staff   180M  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz.asc\n-rw-r--r--@ 1 fe-work  staff   187B  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz.sha512\n-rw-r--r--@ 1 fe-work  staff   6.7M  9 20 10:16 apache-seata-2.2.0-incubating-src.zip\n-rw-r--r--@ 1 fe-work  staff   6.7M  9 20 10:16 apache-seata-2.2.0-incubating-src.zip.asc\n-rw-r--r--  1 fe-work  staff   300B  9 20 10:16 apache-seata-2.2.0-incubating-src.zip.sha512\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The KEYS file in the parent ",(0,s.jsx)(n.code,{children:"seata"})," directory needs to ensure that the public key generated in the first step is appended."]}),"\n",(0,s.jsx)(n.p,{children:"Run the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'svn add x.x.x\nsvn commit -m "submit x.x.x version"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you updated the KEYS file, you need to run ",(0,s.jsx)(n.code,{children:"svn update KEYS"})," before committing."]}),"\n",(0,s.jsx)(n.p,{children:"After executing the commit, you will be prompted to enter your Apache LDAP username and password. Enter them to successfully submit the changes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u279c  seata svn commit -m 'submit 2.2.0 version'\nAdding       2.2.0\nAdding (binary) 2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz\nAdding (binary) 2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz.asc\nAdding       2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz.sha512\nAdding (binary) 2.2.0/apache-seata-2.2.0-incubating-src.zip\nAdding (binary) 2.2.0/apache-seata-2.2.0-incubating-src.zip.asc\nAdding       2.2.0/apache-seata-2.2.0-incubating-src.zip.sha512\nTransmitting file data...done\nCommitting transaction...\nCommitted revision 71769.\n"})}),"\n",(0,s.jsx)(n.h4,{id:"23-creating-tag-and-release-note",children:"2.3 Creating Tag and Release Note"}),"\n",(0,s.jsx)(n.h5,{id:"231-creating-a-tag",children:"2.3.1 Creating a Tag"}),"\n",(0,s.jsx)(n.p,{children:"Execute the following command in the x.x.x branch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Copy Codegit tag vx.x.x -m 'release: release for x.x.x'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then push the tag to the upstream (seata repository):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Copy Codegit push upstream vx.x.x\n"})}),"\n",(0,s.jsx)(n.h5,{id:"232-creating-a-release-note",children:"2.3.2 Creating a Release Note"}),"\n",(0,s.jsxs)(n.p,{children:["Create a release note using the following link: ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/releases/new",children:"New release \xb7 apache/incubator-seata (github.com)"}),' and set "Choose a tag" to the corresponding tag.']}),"\n",(0,s.jsx)(n.p,{children:'Set it as "Set as a pre-release." After the overall vote passes, change it to "Set as the latest release."'}),"\n",(0,s.jsx)(n.h1,{id:"3-voting-phase",children:"3. Voting Phase"}),"\n",(0,s.jsx)(n.h2,{id:"31-internal-community-voting",children:"3.1 Internal Community Voting"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voting lasts at least 72 hours and requires 3 +1 binding votes."})}),"\n",(0,s.jsx)(n.p,{children:"Send to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dev@seata.apache.org\n"})}),"\n",(0,s.jsx)(n.p,{children:"Title:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[VOTE] Release Apache Seata (Incubating) x.x.x-RCN (RoundN) \n"})}),"\n",(0,s.jsx)(n.p,{children:'In this context, "N" in RC N and Round N represents the number of times the voting has occurred for that version.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hi Seata Community,\n\nThis is a call for vote to release Apache Seata(incubating)\n2.2.0 This is the first release of Apache Seata(incubating).\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/seata/x.x.x/\n\nThe staging repo:\nhttps://repository.apache.org/content/repositories/${STAGING.RELEASE}/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-seata/releases/tag/vx.x.x\n\nHash for the release tag:\nlasr commit id\n\nRelease Notes:\nhttps://github.com/apache/incubator-seata/releases/tag/vx.x.x\n\nThe artifacts have been signed with Key [ key-id ], corresponding\nto\n[ jianbin@apache.org ]\nwhich can be found in the keys file:\nhttps://downloads.apache.org/incubator/seata/KEYS\n\nBuild Environment: JDK 8+, Apache Maven 3.6.0+.\n/mvnw clean package -DskipTests=true\n\nCI Test Workflow:\nlast commit ci:\nhttps://github.com/apache/incubator-seata/actions/runs/10938949607/job/30411922716\nhttps://github.com/apache/incubator-seata/actions/runs/10938949623/job/30410204492\nhttps://github.com/apache/incubator-seata/actions/runs/10938949605/job/30411747821\n\nThe vote will be open for at least 72 hours.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nTo learn more about Apache Seata , please see https://seata.apache.org/\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"312-completing-the-vote",children:"3.1.2 Completing the Vote"}),"\n",(0,s.jsx)(n.p,{children:"Send the release vote approval via email."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hi Community,\n\n\nThe vote to release Apache Seata (Incubating) vx.x.x-RCN has passed\nwith 3 +1 binding votes, and no +0 or -1 votes.\n\n3 (+1 binding)\n\n- Jianbin Chen\n\n- Jiangke Wu\n\n- Jiawei Zhang\n\nno further 0 or -1 votes.\n\n\nThe vote thread:\nhttps://lists.apache.org/thread/rwco6lms9qo10whjj8gg1dr8j7drl2gf\n\nThank you for reviewing and voting for our release candidate.\n\nWe will soon launch the second stage of voting.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-voting-in-the-incubator",children:"3.2 Voting in the Incubator"}),"\n",(0,s.jsx)(n.p,{children:"This is similar to the community voting, but you need to include the thread link related to the community vote to demonstrate that consensus has been reached within the community."}),"\n",(0,s.jsxs)(n.p,{children:["Send an email to ",(0,s.jsx)(n.code,{children:"general@incubator.apache.org"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello everyone,\n\nThis is a call for vote to release Apache Seata(incubating)\n2.2.0 This is the first release of Apache Seata(incubating).\n\nThe vote thread:\nhttps://lists.apache.org/thread/rwco6lms9qo10whjj8gg1dr8j7drl2gf\n\nVote Result:\nhttps://lists.apache.org/thread/ybo9c5hrx2h2glg2bdgs3t22xg734y7r\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/seata/x.x.x/\n\nThe staging repo:\nhttps://repository.apache.org/content/repositories/${STAGING.RELEASE}/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-seata/releases/tag/vx.x.x\n\nHash for the release tag:\nlast commit id\n\nRelease Notes:\nhttps://github.com/apache/incubator-seata/releases/tag/vx.x.x\n\nThe artifacts have been signed with Key [ key-id ], corresponding\nto\n[ jianbin@apache.org ]\nwhich can be found in the keys file:\nhttps://downloads.apache.org/incubator/seata/KEYS\n\nBuild Environment: JDK 8+, Apache Maven 3.6.0+.\n/mvnw clean package -DskipTests=true\n\nCI Test Workflow:\nlast commit ci:\nhttps://github.com/apache/incubator-seata/actions/runs/10938949607/job/30411922716\nhttps://github.com/apache/incubator-seata/actions/runs/10938949623/job/30410204492\nhttps://github.com/apache/incubator-seata/actions/runs/10938949605/job/30411747821\n\nThe vote will be open for at least 72 hours.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nTo learn more about Apache Seata , please see https://seata.apache.org/\n"})}),"\n",(0,s.jsx)(n.h1,{id:"4-completing-the-release",children:"4. Completing the Release"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["From the Apache Nexus repository, select the previously closed ",(0,s.jsx)(n.strong,{children:"orgapacheseata-XXX"})," and click the ",(0,s.jsx)(n.code,{children:"Release"})," icon to publish."]}),"\n",(0,s.jsxs)(n.li,{children:["Pull the binaries and sources that were previously uploaded to SVN dev in the same way from ",(0,s.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/seata/",children:"https://dist.apache.org/repos/dist/release/incubator/seata/"}),". Move the x.x.x from dev to release, then execute ",(0,s.jsx)(n.code,{children:"svn delete x.x.x"})," in dev followed by ",(0,s.jsx)(n.code,{children:"svn commit"}),". After that, delete x.x.x from dev. Navigate to the release directory for seata and use ",(0,s.jsx)(n.code,{children:"svn add"})," to submit the x.x.x version to the release path."]}),"\n",(0,s.jsx)(n.li,{children:'Set the release note to "Set as the latest release" and submit it.'}),"\n",(0,s.jsx)(n.li,{children:"Update the x.x.x documentation on the Seata official website and add the corresponding download links for the binaries and sources."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var s=a(96540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);