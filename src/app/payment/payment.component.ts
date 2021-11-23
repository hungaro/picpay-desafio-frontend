import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {tap} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {SecurityService} from '../services/security.service';
import {PaymentDeleteDialogComponent} from './payment-delete-dialog/payment-delete-dialog.component';
import {PaymentFormComponent} from './payment-form/payment-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-payment',
    templateUrl: 'payment.component.html',
    styleUrls: ['payment.component.css']
})
export class PaymentComponent implements OnInit {
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    // DataSource da listagem
    dataSource: any;

    // Colunas disponibilizas na listagem
    displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed', 'actions'];

    constructor(private dataService: DataService,
                private securityService: SecurityService,
                private datePipe: DatePipe,
                private liveAnnouncer: LiveAnnouncer,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        // O Correto seria implementar um guard, porém devido ao curto tempo, deixaria no proprio component a verificação de login
        this.securityService.checkLogin();
        this.loadData();
    }

    loadData() {
        // Obter todos os registros das tasks
        this.dataService.getAll('tasks').pipe(tap(data => {
            this.dataSource = [];
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })).subscribe();
    }

    formatDate(date: any) {
        // formatar data para outro formato
        return this.datePipe.transform(date, 'dd/MM/yyyy');
    }

    announceSortChange(sortState: Sort) {
        // anunciar o sentido que será realizado o sort da listagem
        if (sortState.direction) {
            this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this.liveAnnouncer.announce('Sorting cleared');
        }
    }

    applyFilter(value: string) {
        // filtrar os dados sem retornar ao banco, utilizando o próprio recurso de filtro da listagem
        this.dataSource.filter = value.trim().toLowerCase();
    }

    logOut(){
        // realizar logout
        this.securityService.logout();
    }

    openDialog(data?: any, isDelete?: boolean): void {
        let dialogRef;
        if (isDelete) {
            dialogRef = this.dialog.open(PaymentDeleteDialogComponent, {
                width: '400px',
                data: data
            });
        } else {
            dialogRef = this.dialog.open(PaymentFormComponent, {
                width: '1000px',
                data: data
            });
        }

        dialogRef.afterClosed().subscribe(result => {
            this.loadData();
        });
    }
}
