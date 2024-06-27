import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'bp-skeleton',
	templateUrl: './skeleton.component.html',
	styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
	@Input() size: number = 3;
	items: number[] = Array(3);
	ngOnInit(): void {
		this.items = Array.from({ length: this.size }, (_, index) => index + 1);
	}

}
