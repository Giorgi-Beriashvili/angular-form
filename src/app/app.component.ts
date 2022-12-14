import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    userForm: FormGroup = new FormGroup({
        firstname: new FormControl('', [
            Validators.required, 
            Validators.pattern('^[a-zA-Z]+$'),
        ]),
        lastname: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-zA-Z]+$'),
        ]),
        email: new FormControl('', [Validators.email, Validators.required]),
        phone: new FormControl('', [
            Validators.required,
            Validators.min(123456789),
        ]),
        github: new FormControl('', [
            Validators.required,
            Validators.pattern(
                '^(http(s?)://)?(www.)?github.([a-z])+/([A-Za-z0-9]{1,})+/?$'
            ),
        ]),
        linkedin: new FormControl('', [
            Validators.required,
            Validators.pattern(
                '^(http(s?)://)?(www.)?linkedin.([a-z])+/([A-Za-z0-9]{1,})+/?$'
            ),
        ]),

        experience: new FormGroup({
            work: new FormControl('', [Validators.required]),
            from: new FormControl('', [
                Validators.required,
                Validators.min(2000),
                Validators.max(2022),
            ]),
            to: new FormControl('', [
                Validators.required,
                Validators.min(2000),
                Validators.max(2022),
            ]),
        }),

        education: new FormGroup({
            institution: new FormControl('', [Validators.required]),
            from: new FormControl('', [
                Validators.required,
                Validators.min(2000),
                Validators.max(2022),
            ]),
            to: new FormControl('', [
                Validators.required,
                Validators.min(2000),
                Validators.max(2022),
            ]),
        }),
    });

    get firstname() {
        return this.userForm.get('firstname');
    }

    get lastname() {
        return this.userForm.get('lastname');
    }

    get email() {
        return this.userForm.get('email');
    }

    get phone() {
        return this.userForm.get('phone');
    }

    get github() {
        return this.userForm.get('github');
    }

    get linkedin() {
        return this.userForm.get('linkedin');
    }

    get work() {
        return this.userForm.get('experience')?.get('work');
    }

    get workFrom() {
        return this.userForm.get('experience')?.get('from');
    }

    get workTo() {
        return this.userForm.get('experience')?.get('to');
    }

    get institution() {
        return this.userForm.get('education')?.get('institution');
    }

    get institutionFrom() {
        return this.userForm.get('education')?.get('from');
    }

    get institutionTo() {
        return this.userForm.get('education')?.get('to');
    }

    onSubmit() {
        console.log(this.userForm);
    }
}
