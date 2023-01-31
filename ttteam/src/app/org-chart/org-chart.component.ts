import { Component, OnInit } from '@angular/core';  
import { TreeNode } from 'primeng/api';  
import { Counselor } from '../models/counselor.model';
import { JsonService } from '../services/json.service';

  
@Component({  
  selector: 'app-orgchart',  
  templateUrl: './org-chart.component.html',  
  styleUrls: ['./org-chart.component.css']
})  


export class OrgchartComponent implements OnInit {  

  constructor(private jsonService:JsonService) { }
    counselorNodes:TreeNode<Counselor>[] = [];
    selectedNode: TreeNode<Counselor>[] = [];
    counseleeCount = 0;
    seniorManagerCount = 6;
    managerCount = 6;
    assistantManagerCount = 6;
    seniorCount = 4;
    staffCount = 0;

    ngOnInit(): void {
        this.jsonService.getCounselors().subscribe(json => {            
            this.counselorNodes = [
                {
                    label: "Ajay Samuel",
                    data: {avatar: "assets/fotos/AjaySamuel.jpg",
                            name: "Ajay Samuel",
                            email: "ajay.samuel@gds.ey.com",
                            rank: "Executive Director",
                        type: "person",
                        counselees: []},
                    expanded: true,
                    children: counselorToTreeNode(<Counselor>json).children
                }
             ];
        });
    }   
        
    countingCounselees(counselor: Counselor){
        this.counseleeCount = counselor.counselees.length;
    }

    getCountForRank(rank:string){
        switch (rank){
            case "Senior Manager":
                return this.seniorManagerCount;
            case "Manager": 
                return this.managerCount;
            case "Assistant Manager": 
                return this.assistantManagerCount;
            case "Senior": 
                return this.seniorCount;
            case "Staff/Assistant": 
                return this.staffCount;
            default:
                return 0;
        }
    }

    getLabel(label:string) {
        switch(label){
            case "EY":
                return 'height:220px!important';
            default:
                return 'height:250px';
        }
    }
}

function counselorToTreeNode(counselor: Counselor) {    
    let counselorTreeNodes: TreeNode[] = [];
        
    for (let c of counselor.counselees) {
        counselorTreeNodes.push(counselorToTreeNode(c));
    }
    let expanded = false;

    if(counselor.name == 'Gustavo Orteu' || counselor.name ==  'Sabrina M Silva') {
        expanded = true
    }

    return {
        label: counselor.name,
        data: counselor,
        children: counselorTreeNodes,
        expanded: expanded
    };
}