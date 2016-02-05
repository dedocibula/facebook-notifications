﻿namespace Facebook.Api {
    export interface ILoader {
        getStatusAsync(): Promise<Entities.Status>;

        getNotificationsAsync(token: string): Promise<Entities.Notification[]>;

        getMessagesAsync(token: string, profileUrl: string): Promise<Entities.Message[]>;

        getExternalResourceAsync(url: string): Promise<string>;
    }
}