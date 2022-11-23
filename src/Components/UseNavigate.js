import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function EditById(id) {
    const navigate = useNavigate();
    navigate(`/edit/${id}`);
}

export function DeleteById(id) {
    const navigate = useNavigate();
    navigate(`/delete/${id}`)
}