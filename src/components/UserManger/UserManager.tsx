import React from 'react'
import { motion } from 'framer-motion'
import Action from '../Action'
import { homeVariants } from '@/motionSettings'

const UserManager: React.FC = () => {
  return (
    <motion.div className="overflow-x-auto"
    variants={homeVariants}
    initial="initial"
    animate="enter"
    exit="exit"
    transition={{ duration: 0.5, type: 'linear' }}
    >
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th></th>
            <th>用户名</th>
            <th>职位</th>
            <th>公司</th>
            <th>地址</th>
            <th>上次登录</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Rowe-Schoen</td>
            <td>Russia</td>
            <td>3/25/2021</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Yancy Tear</td>
            <td>Community Outreach Specialist</td>
            <td>Wyman-Ledner</td>
            <td>Brazil</td>
            <td>5/22/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Irma Vasilik</td>
            <td>Editor</td>
            <td>Wiza, Bins and Emard</td>
            <td>Venezuela</td>
            <td>12/8/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Meghann Durtnal</td>
            <td>Staff Accountant IV</td>
            <td>Schuster-Schimmel</td>
            <td>Philippines</td>
            <td>2/17/2021</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Sammy Seston</td>
            <td>Accountant I</td>
            <td>O'Hara, Welch and Keebler</td>
            <td>Indonesia</td>
            <td>5/23/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Lesya Tinham</td>
            <td>Safety Technician IV</td>
            <td>Turner-Kuhlman</td>
            <td>Philippines</td>
            <td>2/21/2021</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Zaneta Tewkesbury</td>
            <td>VP Marketing</td>
            <td>Sauer LLC</td>
            <td>Chad</td>
            <td>6/23/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Andy Tipple</td>
            <td>Librarian</td>
            <td>Hilpert Group</td>
            <td>Poland</td>
            <td>7/9/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Sophi Biles</td>
            <td>Recruiting Manager</td>
            <td>Gutmann Inc</td>
            <td>Indonesia</td>
            <td>2/12/2021</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Florida Garces</td>
            <td>Web Developer IV</td>
            <td>Gaylord, Pacocha and Baumbach</td>
            <td>Poland</td>
            <td>5/31/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Maribeth Popping</td>
            <td>Analyst Programmer</td>
            <td>Deckow-Pouros</td>
            <td>Portugal</td>
            <td>4/27/2021</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Moritz Dryburgh</td>
            <td>Dental Hygienist</td>
            <td>Schiller, Cole and Hackett</td>
            <td>Sri Lanka</td>
            <td>8/8/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Reid Semiras</td>
            <td>Teacher</td>
            <td>Sporer, Sipes and Rogahn</td>
            <td>Poland</td>
            <td>7/30/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Alec Lethby</td>
            <td>Teacher</td>
            <td>Reichel, Glover and Hamill</td>
            <td>China</td>
            <td>2/28/2021</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Aland Wilber</td>
            <td>Quality Control Specialist</td>
            <td>Kshlerin, Rogahn and Swaniawski</td>
            <td>Czech Republic</td>
            <td>9/29/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Teddie Duerden</td>
            <td>Staff Accountant III</td>
            <td>Pouros, Ullrich and Windler</td>
            <td>France</td>
            <td>10/27/2020</td>
            <td><Action/></td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Lorelei Blackstone</td>
            <td>Data Coordiator</td>
            <td>Witting, Kutch and Greenfelder</td>
            <td>Kazakhstan</td>
            <td>6/3/2020</td>
            <td><Action/>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>用户名</th>
            <th>职位</th>
            <th>公司</th>
            <th>地址</th>
            <th>上次登录</th>
            <th>操作</th>
          </tr>
        </tfoot>
      </table>
    </motion.div>
  )
}

export default UserManager
