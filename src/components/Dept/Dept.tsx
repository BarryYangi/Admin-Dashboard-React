import React from 'react'
import Action from '../Action'

const Dept: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th></th>
            <th>修改人</th>
            <th>部门代码</th>
            <th>部门名称</th>
            <th>部门地址</th>
            <th>修改时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Cy Ganderton</td>
            <td>1</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Hart Hagerty</td>
            <td>2</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Brice Swyre</td>
            <td>3</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Marjy Ferencz</td>
            <td>4</td>
            <td>Rowe-Schoen</td>
            <td>Russia</td>
            <td>3/25/2021</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Yancy Tear</td>
            <td>5</td>
            <td>Wyman-Ledner</td>
            <td>Brazil</td>
            <td>5/22/2020</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Irma Vasilik</td>
            <td>6</td>
            <td>Wiza, Bins and Emard</td>
            <td>Venezuela</td>
            <td>12/8/2020</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Meghann Durtnal</td>
            <td>7</td>
            <td>Schuster-Schimmel</td>
            <td>Philippines</td>
            <td>2/17/2021</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Sammy Seston</td>
            <td>8</td>
            <td>O'Hara, Welch and Keebler</td>
            <td>Indonesia</td>
            <td>5/23/2020</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Lesya Tinham</td>
            <td>9</td>
            <td>Turner-Kuhlman</td>
            <td>Philippines</td>
            <td>2/21/2021</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Zaneta Tewkesbury</td>
            <td>10</td>
            <td>Sauer LLC</td>
            <td>Chad</td>
            <td>6/23/2020</td>
            <td><Action/>
            </td>
          </tr>
          <tr>
            <th><input type="checkbox" className="checkbox m-0 h-5 w-5 p-0" /></th>
            <td>Andy Tipple</td>
            <td>11</td>
            <td>Hilpert Group</td>
            <td>Poland</td>
            <td>7/9/2020</td>
            <td><Action/>
            </td>
          </tr>

        </tbody>
        <tfoot>
        <tr>
            <th></th>
            <th>修改人</th>
            <th>部门代码</th>
            <th>部门名称</th>
            <th>部门地址</th>
            <th>修改时间</th>
            <th>操作</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Dept
