import mongoose, { Model, Schema } from "mongoose";
import { CouncilMember } from "./councilMember.model.js";


const councilMemberWrapperSchema = new Schema({


    councilMembers: [CouncilMember]

}, { timestamps: true })
     

export const MemberWrapper = Model("CouncilMembers", councilMemberWrapperSchema)