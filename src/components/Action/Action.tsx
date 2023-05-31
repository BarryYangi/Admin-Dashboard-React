import React from 'react'
import { Edit, Repeat2, Trash } from 'lucide-react'

const Action: React.FC = () => {
  return (
    <><label htmlFor="my-edit" className="tooltip mr-4" data-tip="编辑"><Edit></Edit></label>
      <input type="checkbox" id="my-edit" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">信息修改</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your ID</span>
            </label>
            <label className="input-group">
              <span>修改人</span>
              <input type="text" placeholder="请输入用户ID" className="input input-bordered" />
            </label>
            <textarea className="textarea textarea-bordered mt-3" placeholder="修改内容"></textarea>
          </div>
          <div className="modal-action">
            <label htmlFor="my-edit" className="btn">确认</label>
          </div>
        </div>
      </div>
      <label htmlFor="my-delete" className="tooltip mr-4" data-tip="删除"><Trash color='red'></Trash></label>
      <input type="checkbox" id="my-delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">信息删除</h3>
          <p className="py-4">删除后不可恢复，你确认删除吗？</p>
          <div className="modal-action">
            <label htmlFor="my-delete" className="btn">确认</label>
          </div>
        </div>
      </div>
      <label htmlFor="my-repeat" className="tooltip mr-4" data-tip="刷新缓存"><Repeat2></Repeat2></label>
      <input type="checkbox" id="my-repeat" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">刷新缓存</h3>
          <p className="py-4">此操作将会刷新缓存，确认刷新？</p>
          <div className="modal-action">
            <label htmlFor="my-repeat" className="btn">确认</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Action
