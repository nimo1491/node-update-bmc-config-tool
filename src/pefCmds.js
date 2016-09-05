import chalk from 'chalk';
import childProcess from 'child_process';
import { singleLineString } from './utils';

export default function setPefCmds(ipAddr, username, password) {
  /*
   * User Management
   */

  // Username: 'g_m_dcms'
  // Password: 'password'
  // Network Privilege: 'No Access'
  // Email ID: XXXX
  console.log(chalk.blue('Add Account: g_m_dcms'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set name 3 g_m_dcms`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set password 3 password`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x64 0x03
      0x67 0x5F 0x6D 0x5F 0x64 0x63 0x6D 0x73 0x40 0x74 0x73 0x6D 0x63 0x2E 0x63 0x6F
      0x6D 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set name 3 g_m_dcms`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set password 3 password`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x64 0x03
      0x67 0x5F 0x6D 0x5F 0x64 0x63 0x6D 0x73 0x40 0x74 0x73 0x6D 0x63 0x2E 0x63 0x6F
      0x6D 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00`,
      { stdio: [0, 1, 2] }
    );
  }

  // Username: wcou
  // Password: password
  // Network Privilege: No Access
  // Email ID: XXXX
  console.log(chalk.blue('Add Account: wcou'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set name 4 wcou`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set password 4 password`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x64 0x04
      0x77 0x63 0x6F 0x75 0x40 0x74 0x73 0x6D 0x63 0x2E 0x63 0x6F 0x6D 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set name 4 wcou`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set password 4 password`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x64 0x04
      0x77 0x63 0x6F 0x75 0x40 0x74 0x73 0x6D 0x63 0x2E 0x63 0x6F 0x6D 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00`,
      { stdio: [0, 1, 2] }
    );
  }

  // Username: clkouf
  // Password: password
  // Network Privilege: No Access
  // Email ID: XXXX
  console.log(chalk.blue('Add Account: clkouf'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set name 5 clkouf`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set password 5 password`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x64 0x05
      0x63 0x6C 0x6B 0x6F 0x75 0x66 0x40 0x74 0x73 0x6D 0x63 0x2E 0x63 0x6F 0x6D 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set name 5 clkouf`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      user set password 5 password`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x64 0x05
      0x63 0x6C 0x6B 0x6F 0x75 0x66 0x40 0x74 0x73 0x6D 0x63 0x2E 0x63 0x6F 0x6D 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
      0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00`,
      { stdio: [0, 1, 2] }
    );
  }

  /*
   * SMTP Setting
   */

  // Set Sender Email Address
  console.log(chalk.blue('Set Sender Email Address'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78
      0x01 0x08 0x00 0x00 0x46 0x31 0x35 0x50 0x35 0x4d
      0x50 0x43 0x45 0x53 0x58 0x30 0x30 0x31 0x72 0x69`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78
      0x01 0x08 0x00 0x01 0x62 0x40 0x74 0x73 0x6d 0x63 0x2e 0x63 0x6f 0x6d 0x2e 0x74 0x77`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78
      0x01 0x08 0x00 0x00 0x46 0x31 0x35 0x50 0x35 0x4d
      0x50 0x43 0x45 0x53 0x58 0x30 0x30 0x31 0x72 0x69`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78
      0x01 0x08 0x00 0x01 0x62 0x40 0x74 0x73 0x6d 0x63 0x2e 0x63 0x6f 0x6d 0x2e 0x74 0x77`,
      { stdio: [0, 1, 2] }
    );
  }

  // Set Machine Name: F15P5MPCESX001
  console.log(chalk.blue('Set Machine Name: F15P5MPCESX001'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78
      0x01 0x09 0x00 0x00 0x46 0x31 0x35 0x50 0x35 0x4d 0x50 0x43 0x45 0x53 0x58 0x30 0x30 0x31`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78
      0x01 0x09 0x00 0x00 0x46 0x31 0x35 0x50 0x35 0x4d 0x50 0x43 0x45 0x53 0x58 0x30 0x30 0x31`,
      { stdio: [0, 1, 2] }
    );
  }

  // Enable SMTP Support
  // Set Server Address: 10.213.60.63
  console.log(chalk.blue('Enable SMTP Support and Set Server Address: 10.213.60.63'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78
      0x01 0x01 0x00 0x00 0x0a 0xd5 0x3c 0x3f`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78
      0x01 0x01 0x00 0x00 0x0a 0xd5 0x3c 0x3f`,
      { stdio: [0, 1, 2] }
    );
  }

  /*
   * PEF Management
   */

  // Select Destination 1 Type as Email Alert and Username as g_m_dcms(user3)
  console.log(chalk.blue('Set PEF for g_m_dcms (User 3)'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x0c 0x01 0x01 0x12 0x01 0x06 0x00 0x00`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78 0x01 0x05 0x01 0x00 0x03`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x0c 0x01 0x01 0x12 0x01 0x06 0x00 0x00`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78 0x01 0x05 0x01 0x00 0x03`,
      { stdio: [0, 1, 2] }
    );
  }

  // Select Destination 2 Type as Email Alert and Username as wcou(user4)
  console.log(chalk.blue('Set PEF for wcou (User 4)'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x0c 0x01 0x01 0x12 0x02 0x06 0x00 0x00`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78 0x01 0x05 0x02 0x00 0x04`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x0c 0x01 0x01 0x12 0x02 0x06 0x00 0x00`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78 0x01 0x05 0x02 0x00 0x04`,
      { stdio: [0, 1, 2] }
    );
  }

  // Select Destination 3 Type as Email Alert and Username as clkouf(user5)
  console.log(chalk.blue('Set PEF for clkouf (User 5)'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x0c 0x01 0x01 0x12 0x03 0x06 0x00 0x00`
    );
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78 0x01 0x05 0x03 0x00 0x05`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x0c 0x01 0x01 0x12 0x03 0x06 0x00 0x00`,
      { stdio: [0, 1, 2] }
    );
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x32 0x78 0x01 0x05 0x03 0x00 0x05`,
      { stdio: [0, 1, 2] }
    );
  }

  // Enable Entry 1 with Policy Number 1 Policy and set Destination Selector as 1
  console.log(chalk.blue('Enable PEF 1'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x04 0x12 0x09 0x01 0x18 0x11 0x80`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x04 0x12 0x09 0x01 0x18 0x11 0x80`,
      { stdio: [0, 1, 2] }
    );
  }

  // Enable Entry 2 with Policy Number 2 Policy and set Destination Selector as 2
  console.log(chalk.blue('Enable PEF 2'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x04 0x12 0x9 0x2 0x28 0x12 0x80`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x04 0x12 0x9 0x2 0x28 0x12 0x80`,
      { stdio: [0, 1, 2] }
    );
  }

  // Enable Entry 3 with Policy Number 3 Policy and set Destination Selector as 3
  console.log(chalk.blue('Enable PEF 3'));
  if (process.env.NODE_ENV === 'development') {
    console.log(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x04 0x12 0x09 0x03 0x38 0x13 0x80`
    );
  } else {
    childProcess.execSync(singleLineString`ipmitool -H ${ipAddr} -U ${username} -P ${password}
      raw 0x04 0x12 0x09 0x03 0x38 0x13 0x80`,
      { stdio: [0, 1, 2] }
    );
  }
}
