const Tokenomics: React.FC = () => {
  return (
    <>
      <h1>Tokenomics</h1>
      <h2>Token Distribution</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Allocation</th>
              <th>Total Allocated</th>
              <th>% Of Total</th>
              <th>Unlock Schedule</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ascension Tokens</td>
              <td>150,000,000,000</td>
              <td>15%</td>
              <td>
                Locked at launch for a minimum of 2 years. May be relocked after
                a discussion with the Ascension community.
              </td>
              <td>
                Ascension tokens will be used to pay core team members for their
                work on the project.
              </td>
            </tr>
            <tr>
              <td>P2E Rewards</td>
              <td>225,000,000,000</td>
              <td>22.5%</td>
              <td>Locked at launch. Issuance will start in Q4 of 2022.</td>
              <td>
                P2E tokens will be used to reward players for their in-game
                actions.
              </td>
            </tr>
            <tr>
              <td>Staking Rewards</td>
              <td>225,000,000,000</td>
              <td>22.5%</td>
              <td>Locked at launch. Issuance will start in Q3 of 2022.</td>
              <td>
                Staking Reward tokens will be used to reward players for staking
                their tokens to increase the locked liquidity in the project.
              </td>
            </tr>
            <tr>
              <td>Air Drops</td>
              <td>225,000,000,000</td>
              <td>2%</td>
              <td>Linear release from the time of the IDO.</td>
              <td>
                Air Drop tokens will be used for community marketing
                initiatives.
              </td>
            </tr>
            <tr>
              <td>Strategic Sales</td>
              <td>50,000,000,000</td>
              <td>5%</td>
              <td>
                Locked until the strategic sales have officially been completed.
                From that point in time, locked for 6 months, then released via
                a 6-month linear release.
              </td>
              <td>
                Strategic Sale tokens will be saved for sales and partnerships
                in the project's future.
              </td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>65,000,000,000</td>
              <td>6.5%</td>
              <td>
                Not locked, available for usage at the discretion of the team.
              </td>
              <td>
                Marketing tokens will be used for marketing in the crypto space
                (calls, promotions, etc.). In the later stages of game
                development, control of this wallet will be transferred to the
                $ASCN token holder DAO.
              </td>
            </tr>
            <tr>
              <td>IDO</td>
              <td>110,000,000,000</td>
              <td>11%</td>
              <td>
                Locked in the liquidity pool for a minimum of 1 year. May be
                relocked after a discussed with the Ascension team and the
                Ascension community.
              </td>
              <td>
                IDO tokens are the tokens that will be released for the initial
                public sale.
              </td>
            </tr>
            <tr>
              <td>Private Raise</td>
              <td>55,000,000,000</td>
              <td>5.5%</td>
              <td>
                Locked until the private raise has been officially completed.
                From that point in time, locked for 6 months, the released via a
                6-month linear release.
              </td>
              <td>
                Private Raise tokens will be saved for official fundraising and
                sales to angel investors.
              </td>
            </tr>
            <tr>
              <td>Game Operations & Development</td>
              <td>100,000,000,000</td>
              <td>10%</td>
              <td>Linear release from the time of the IDO.</td>
              <td>
                Game Operations & Development tokens will be used for the
                further development of the Ascension Ecoverse game and all
                future Ascension initiatives. In the later stages of game
                development, control of this wallet will be transferred to the
                $ASCN token holder DAO
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Launch Tokenomics</h2>
      <p>
        110 billion tokens available for public sale, with ZERO token-generated
        transaction fees. Buy without wondering where your money is going, join
        our community, and get involved with the Ascension Ecoverse project!
      </p>
      <p>
        A more detailed tokenomics breakdown can be found in the{" "}
        <a href="#whitepaper">whitepaper</a>.
      </p>
    </>
  );
};

export default Tokenomics;
